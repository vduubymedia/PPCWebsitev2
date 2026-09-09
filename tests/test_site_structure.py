import unittest
from html.parser import HTMLParser
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPO_ROOT / "PacPress website v3"


class SiteHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.breadcrumb_navs = 0
        self.industry_cards = []
        self._current_card = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        classes = set(attributes.get("class", "").split())
        if tag == "nav" and "breadcrumbs" in classes:
            self.breadcrumb_navs += 1
        if tag == "article" and "industry-page-card" in classes:
            self._current_card = {"images": []}
            self.industry_cards.append(self._current_card)
        elif tag == "img" and self._current_card is not None:
            self._current_card["images"].append(attributes)

    def handle_endtag(self, tag):
        if tag == "article" and self._current_card is not None:
            self._current_card = None


def parse_html(path):
    parser = SiteHTMLParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


class SiteStructureTests(unittest.TestCase):
    def test_each_industry_card_has_a_real_image(self):
        page = parse_html(SITE_ROOT / "industries.html")

        self.assertEqual(9, len(page.industry_cards))
        for card in page.industry_cards:
            self.assertEqual(1, len(card["images"]))
            image = card["images"][0]
            self.assertTrue(image.get("alt", "").strip())
            self.assertTrue((SITE_ROOT / image["src"]).is_file())

    def test_public_pages_do_not_render_breadcrumb_bars(self):
        excluded = {
            SITE_ROOT / "index.html",
            SITE_ROOT / "industries-print.html",
            SITE_ROOT / "PacPress Industries Page.html",
        }
        public_pages = [
            path
            for path in SITE_ROOT.rglob("*.html")
            if path not in excluded and "uploads" not in path.parts
        ]

        offenders = [
            str(path.relative_to(SITE_ROOT))
            for path in public_pages
            if parse_html(path).breadcrumb_navs
        ]
        self.assertEqual([], offenders)


if __name__ == "__main__":
    unittest.main()
