//Contains all of the objects needed to create each skill badge with Skill Badge component
//Exports the arrays needed to display respective skills by project

import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import React from "../assets/React.png";
import Node from "../assets/Node.png";
import JQuery from "../assets/JQuery.png";
import JSON from "../assets/JSON.png";
import Liquid from "../assets/Liquid.png";
import Shopify from "../assets/Shopify.png";
import Wordpress from "../assets/WordPress.png";
import Terminal from "../assets/Terminal.png";
import Git from "../assets/Git.png";
import Accessability from "../assets/Accessibility.png";
import Responsive from "../assets/Responsive.png";
import Performance from "../assets/Performance.png";

const HTMLBadge = {
    image: HTML,
    title: "HTML",
};

const CSSBadge = {
    image: CSS,
    title: "CSS",
};

const JavaScriptBadge = {
    image: JavaScript,
    title: "JavaScript",
};

const ReactBadge = {
    image: React,
    title: "React",
};

const NodeBadge = {
    image: Node,
    title: "Node",
};

const JQueryBadge = {
    image: JQuery,
    title: "JQuery",
};

const JSONBadge = {
    image: JSON,
    title: "JSON",
};

const LiquidBadge = {
    image: Liquid,
    title: "Liquid",
};

const ShopifyBadge = {
    image: Shopify,
    title: "Shopify",
};

const WordpressBadge = {
    image: Wordpress,
    title: "WordPress",
};

const TerminalBadge = {
    image: Terminal,
    title: "Terminal",
};

const GitBadge = {
    image: Git,
    title: "Git",
};

const AccessibilityBadge = {
    image: Accessability,
    title: "*Accessibility",
};

const ResponsiveBadge = {
    image: Responsive,
    title: "*Responsive Design",
};

const PerformanceBadge = {
    image: Performance,
    title: "*Performance",
};

const uhsSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    JQueryBadge,
    JSONBadge,
    LiquidBadge,
    ShopifyBadge,
];

const benavestSkills = [
    HTMLBadge,
    CSSBadge,
    WordpressBadge
];

const portfolioSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    ReactBadge,
    NodeBadge,
    TerminalBadge,
    GitBadge,
];

const allSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    ReactBadge,
    NodeBadge,
    JQueryBadge,
    JSONBadge,
    LiquidBadge,
    ShopifyBadge,
    WordpressBadge,
    TerminalBadge,
    GitBadge,
    AccessibilityBadge,
    PerformanceBadge,
    ResponsiveBadge,
];

export {
    uhsSkills,
    benavestSkills,
    portfolioSkills,
    allSkills
};
