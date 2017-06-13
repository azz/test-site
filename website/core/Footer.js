const React = require('React');

const githubButton = React.createElement(
  "a",
  {
    className: "github-button",
    href: "https://github.com/deltice/test-site",
    "data-icon": "octicon-star",
    "data-count-href": "/deltice/test-site/stargazers",
    "data-count-api": "/repos/deltice/test-site#stargazers_count",
    "data-count-aria-label": "# stargazers on GitHub",
    "aria-label": "Star this project on GitHub" },
  "Star"
);

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return React.createElement(
      "footer",
      { className: "nav-footer", id: "footer" },
      React.createElement(
        "section",
        { className: "sitemap" },
        React.createElement(
          "a",
          { href: this.props.config.baseUrl, className: "nav-home" },
          React.createElement("img", {
            src: this.props.config.baseUrl + this.props.config.footerIcon,
            alt: this.props.config.title,
            width: "66",
            height: "58"
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h5",
            null,
            "Docs"
          ),
          React.createElement(
            "a",
            {
              href: this.props.config.baseUrl + 'docs/' + this.props.language + '/doc1.html'
            },
            "Getting Started (or other categories)"
          ),
          React.createElement(
            "a",
            {
              href: this.props.config.baseUrl + 'docs/' + this.props.language + '/doc2.html'
            },
            "Guides (or other categories)"
          ),
          React.createElement(
            "a",
            {
              href: this.props.config.baseUrl + 'docs/' + this.props.language + '/doc3.html'
            },
            "API Reference (or other categories)"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h5",
            null,
            "Community"
          ),
          React.createElement(
            "a",
            { href: this.props.config.baseUrl + this.props.language + '/users.html' },
            "User Showcase"
          ),
          React.createElement(
            "a",
            {
              href: "http://stackoverflow.com/questions/tagged/",
              target: "_blank"
            },
            "Stack Overflow"
          ),
          React.createElement(
            "a",
            {
              href: "https://discordapp.com/"
            },
            "Project Chat"
          ),
          React.createElement(
            "a",
            { href: "https://twitter.com/", target: "_blank" },
            "Twitter"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h5",
            null,
            "More"
          ),
          React.createElement(
            "a",
            { href: this.props.config.baseUrl + "blog" },
            "Blog"
          ),
          React.createElement(
            "a",
            { href: "https://github.com/" },
            "GitHub"
          ),
          githubButton
        )
      ),
      React.createElement(
        "a",
        {
          href: "https://code.facebook.com/projects/",
          target: "_blank",
          className: "fbOpenSource"
        },
        React.createElement("img", {
          src: this.props.config.baseUrl + "img/oss_logo.png",
          alt: "Facebook Open Source",
          width: "170",
          height: "45"
        })
      ),
      React.createElement(
        "section",
        { className: "copyright" },
        "Copyright \xA9 ",
        currentYear,
        " Facebook Inc."
      )
    );
  }
}

module.exports = Footer;