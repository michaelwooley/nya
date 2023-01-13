# Mostly the same w/ named group
# Alternateive: r"((http[s]?:\/\/github\.com\/(?!(?:repos|topics)\/)([a-zA-Z0-9_\-]+)\/([a-zA-Z0-9_\-]+))(.*))"
# TODO Account for upper/lower case
r"(?P<href>(?P<href_repo>http[s]?:\/\/github\.com\/(?P<owner>(?!(?:repos|topics)\/)[a-zA-Z0-9_\-]+)\/(?P<repo>[a-zA-Z0-9_\-]+))(.*))"
# TODO Pull in github reserved org names and swap out for "repos|topics" part above.
# matches = re.finditer(regex, test_str, re.MULTILINE | re.IGNORECASE)
