# noqa
"""List of strings that are reserved by github and cannot be org/user names.

Useful for distinguishing between github URLs that refer to repos and those that do not.

```
# This is a repo:
https://github.com/Mottie/github-reserved-names

# This is not a repo:
https://github.com/readme/guides
```


REFERENCE https://github.com/Mottie/github-reserved-names
REFERENCE https://github.com/refined-github/shorten-repo-url/issues/1
"""

# Full-on, reserved paths.
# REFERENCE https://github.com/Mottie/github-reserved-names/blob/master/reserved-names.json
# fmt:off
_github_reserved_org_names_full = ["300", "302", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "693", "694", "695", "900", "about", "access", "account", "admin", "advisories", "anonymous", "any", "api", "apps", "attributes", "auth", "billing", "blob", "blog", "bounty", "branches", "business", "businesses", "c", "cache", "case-studies", "categories", "central", "certification", "changelog", "chat", "cla", "cloud", "codereview", "collection", "collections", "comments", "commit", "commits", "community", "companies", "compare", "contact", "contributing", "cookbook", "coupons", "customer-stories", "customer", "customers", "dashboard", "dashboards", "design", "develop", "developer", "diff", "discover", "discussions", "docs", "downloads", "downtime", "editor", "editors", "edu", "enterprise", "events", "explore", "featured", "features", "files", "fixtures", "forked", "garage", "ghost", "gist", "gists", "graphs", "guide", "guides", "help", "help-wanted", "home", "hooks", "hosting", "hovercards", "identity", "images", "inbox", "individual", "info", "integration", "interfaces", "introduction", "invalid-email-address", "investors", "issues", "jobs", "join", "journal", "journals", "lab", "labs", "languages", "launch", "layouts", "learn", "legal", "library", "linux", "listings", "lists", "login", "logos", "logout", "mac", "maintenance", "malware", "man", "marketplace", "mention", "mentioned", "mentioning", "mentions", "migrating", "milestones", "mine", "mirrors", "mobile", "navigation", "network", "new", "news", "none", "nonprofit", "nonprofits", "notices", "notifications", "oauth", "offer", "open-source", "organisations", "organizations", "orgs", "pages", "partners", "payments", "personal", "plans", "plugins", "popular", "popularity", "posts", "press", "pricing", "professional", "projects", "pulls", "raw", "readme", "recommendations", "redeem", "releases", "render", "reply", "repositories", "resources", "restore", "revert", "save-net-neutrality", "saved", "scraping", "search", "security", "services", "sessions", "settings", "shareholders", "shop", "showcases", "signin", "signup", "site", "spam", "sponsors", "ssh", "staff", "starred", "stars", "static", "status", "statuses", "storage", "store", "stories", "styleguide", "subscriptions", "suggest", "suggestion", "suggestions", "support", "suspended", "talks", "teach", "teacher", "teachers", "teaching", "team", "teams", "ten", "terms", "timeline", "topic", "topics", "tos", "tour", "train", "training", "translations", "tree", "trending", "updates", "username", "users", "visualization", "w", "watching", "wiki", "windows", "works-with", "www0", "www1", "www2", "www3", "www4", "www5", "www6", "www7", "www8", "www9", ]
# fmt: on

# "Oddballs" - original includes more info about behavior.
# REFERENCE https://github.com/Mottie/github-reserved-names/blob/master/oddballs.json
# fmt:off
_github_reserved_org_names_oddballs = ["avatars", "assets", "bookmarks", "checks", "conversations", "labels", "media", "nodes", "owners", "page", "registry", "seats", "shared", "tasks", "uploads", "account", "apps", "blog", "c", "contact", "contributing", "customer", "customers", "developer", "edu", "guides", "help", "launch", "mac", "mirrors", "pages", "plans", "press", "readme", "repositories", "resources", "security", "settings", "signup", "terms", "topic", "tos", "training", "users", "wiki", "windows", "advisories", "collections", "hovercards", "inbox", "invalid-email-address", "suggestions", "suspended", "case-studies", "watching", "save-net-neutrality", "ghost", "status", ]
# fmt:on

github_reserved_org_names = (
    _github_reserved_org_names_full + _github_reserved_org_names_oddballs
)
