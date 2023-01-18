# 👉 🕶️ 👈 NYA ("No, _you're_ awesome")

A graph of [awesome](https://github.com/sindresorhus/awesome) resources.

TODO #11 Add use cases + ideas + non-goals to top-level README.

<!-- _NON-GOAL:_ Replace the awesome human curation of awesome repos with some dumb, locally-optimal recommendation engine. BOR-ING (and useless). -->

<!-- Basically, awesome repos have a topic (e.g. "python", "robotics") and they link to a bunche of awesome, human-curated resources on that topic (code, blogs, videos). If these repos were characters in a play, they'd be like, "Bro, you're awesome 👉. And I'm gonna let the world know." -->


```
'sort:updated-asc fork:false is:public stars:>=5 topic:awesome',
'sort:updated-asc fork:false is:public stars:>=5 -topic:awesome "awesome-" in:name'
'sort:updated-asc fork:false is:public stars:>=5  -topic:awesome NOT "awesome-" in:name topic:best-of'
'sort:updated-asc fork:false is:public stars:>=5  -topic:awesome NOT "awesome-" in:name -topic:best-of topic:awesome-list'

{
  "query": "fork:false is:public stars:>=5  -topic:awesome NOT \"awesome-\" in:name -topic:best-of topic:awesome-list",
  "after": null,
  "first": null
}
```