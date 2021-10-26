(this.webpackJsonpmern = this.webpackJsonpmern || []).push([
  [0],
  {
    20: function (e, t, n) {
      e.exports = n(51);
    },
    25: function (e, t, n) {},
    44: function (e, t, n) {},
    45: function (e, t, n) {},
    51: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        l = n.n(a),
        r = n(17),
        c = n.n(r),
        o = n(3);
      var u = function (e) {
        var t = e.children;
        return l.a.createElement(
          "div",
          {
            style: {
              height: 300,
              clear: "both",
              paddingTop: 120,
              textAlign: "center",
            },
            className: "",
          },
          t
        );
      };
      n(25);
      var i = function (e) {
          return l.a.createElement(
            "form",
            { className: "search" },
            l.a.createElement(
              "div",
              { className: "form-group" },
              l.a.createElement(
                "label",
                { htmlFor: "language" },
                "Book Search:"
              ),
              l.a.createElement("input", {
                value: e.search,
                onChange: e.handleInputChange,
                name: "term",
                list: "term",
                type: "text",
                className: "form-control",
                placeholder: "Type in your search for a book",
                id: "term",
              })
            )
          );
        },
        m = n(4),
        s = n.n(m),
        E = function (e) {
          console.log(e);
          var t = Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
          }).REACT_APP_API_KEY;
          return (
            console.log(
              "from API.js",
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
              })
            ),
            console.log(
              "The API KEY",
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
              }).REACT_APP_API_KEY
            ),
            s.a
              .get(
                "https://www.googleapis.com/books/v1/volumes?q="
                  .concat(e, "+inauthor:keyes&key=")
                  .concat(t)
              )
              .then(function (e) {
                return e.data.items.map(function (e) {
                  var t, n;
                  return (
                    (t = e.volumeInfo.imageLinks
                      ? e.volumeInfo.imageLinks.thumbnail
                      : "placeholder"),
                    (n = e.saleInfo.buyLink
                      ? e.saleInfo.buyLink
                      : "Not Available"),
                    {
                      title: e.volumeInfo.title,
                      author: e.volumeInfo.authors,
                      picture: t,
                      synopsis: e.volumeInfo.description,
                      link: n,
                      key: e.id,
                    }
                  );
                });
              })
              .catch(function (e) {
                return console.log(e);
              })
          );
        };
      function d(e) {
        var t = e.fluid,
          n = e.children;
        return l.a.createElement(
          "div",
          { className: "container".concat(t ? "-fluid" : "") },
          n
        );
      }
      function f(e) {
        var t = e.fluid,
          n = e.children;
        return l.a.createElement(
          "div",
          { className: "row".concat(t ? "-fluid" : "") },
          n
        );
      }
      function h(e) {
        var t = e.size,
          n = e.children;
        return l.a.createElement(
          "div",
          {
            className: t
              .split(" ")
              .map(function (e) {
                return "col-" + e;
              })
              .join(" "),
          },
          n
        );
      }
      var v = function (e, t) {
        var n = Object(a.useState)(e),
          l = Object(o.a)(n, 2),
          r = l[0],
          c = l[1];
        return (
          Object(a.useEffect)(
            function () {
              var n = setTimeout(function () {
                c(e), console.log(t);
              }, t);
              return function () {
                clearTimeout(n);
              };
            },
            [e, t]
          ),
          r
        );
      };
      var b = function (e) {
        return l.a.createElement(
          "div",
          null,
          l.a.createElement("h5", null, e.data.title),
          l.a.createElement("h5", null, e.data.author),
          l.a.createElement("h5", null, e.data.synopsis)
        );
      };
      n(44);
      n(45);
      function p(e) {
        return l.a.createElement(
          "button",
          Object.assign({}, e, {
            style: { float: "right", marginBottom: 10 },
            className: "btn btn-success",
          }),
          e.children
        );
      }
      var O = function () {
          var e = Object(a.useState)("Search for a book"),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)([]),
            m = Object(o.a)(c, 2),
            s = m[0],
            O = m[1],
            _ = v(n, 3e3);
          return (
            Object(a.useEffect)(
              function () {
                n &&
                  _ &&
                  E(_).then(function (e) {
                    O(e);
                  });
              },
              [_]
            ),
            l.a.createElement(
              d,
              { fluid: !0 },
              l.a.createElement(
                f,
                null,
                l.a.createElement(
                  h,
                  { size: "md-6" },
                  l.a.createElement(
                    u,
                    null,
                    l.a.createElement("h1", null, "Search for a book")
                  ),
                  l.a.createElement(i, {
                    handleInputChange: function (e) {
                      r(e.target.value);
                    },
                    results: n,
                  }),
                  l.a.createElement(p, null, "Submit Book")
                ),
                l.a.createElement(
                  h,
                  { size: "md-6 sm-12" },
                  l.a.createElement(
                    u,
                    null,
                    l.a.createElement("h1", null, "Results"),
                    l.a.createElement(
                      f,
                      null,
                      l.a.createElement(
                        h,
                        { size: "md-12" },
                        l.a.createElement(
                          u,
                          null,
                          console.log("hit that shit"),
                          s.map(function (e) {
                            return l.a.createElement(b, { data: e, key: e.id });
                          }),
                          console.log("past that shit"),
                          l.a.createElement("h1", null)
                        )
                      )
                    ),
                    l.a.createElement(
                      f,
                      null,
                      l.a.createElement(
                        h,
                        { size: "md-10 md-offset-1" },
                        l.a.createElement(
                          "article",
                          null,
                          l.a.createElement("h1", null, "Description")
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        _ = n(6);
      var g = function () {
        return l.a.createElement(
          "nav",
          { className: "navbar navbar-expand-lg navbar-dark bg-primary" },
          l.a.createElement(
            "a",
            { className: "navbar-brand", href: "/" },
            "React Reading List"
          )
        );
      };
      var S = function () {
        return l.a.createElement(
          _.a,
          null,
          l.a.createElement(
            "div",
            null,
            l.a.createElement(g, null),
            l.a.createElement(O, null)
          )
        );
      };
      c.a.render(l.a.createElement(S, null), document.getElementById("root"));
    },
  },
  [[20, 1, 2]],
]);
//# sourceMappingURL=main.d695bfb9.chunk.js.map
