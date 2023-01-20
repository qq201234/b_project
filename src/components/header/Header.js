import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import "./header.css";

function Header() {
  const nav_items = ["首頁", "訂單管理", "所有商品", "會員中心"];
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <div>電競</div>人
        </div>
        <nav className="active">
          <ul>
            {nav_items.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </nav>
        <div className="icon__groups">
          <a
            href="#/"
            onClick={() => {
              setSearch(!search);
            }}
          >
            <AiOutlineSearch />
          </a>
          <a href="#/">
            <FaShoppingCart />
          </a>
          <a href="#/" className="login">
            登入
          </a>
          <a
            href="#/"
            className="menu"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FiMenu />
          </a>
        </div>
      </header>
      <div className={search ? "search__group active" : "search__group"}>
        <input type="text" className="search__input" />
        <a href="/#" className="search__inputButton">
          <AiOutlineSearch />
        </a>
      </div>
      <div
        className={isNavExpanded ? "navigation-menu active" : "navigation-menu"}
      >
        <ul>
          <li>
            <a href="#/">首頁</a>
          </li>
          <li>
            <a href="#/">訂單管理</a>
          </li>
          <li>
            <a href="#/">所有商品</a>
          </li>
          <li>
            <a href="#/">會員中心</a>
          </li>
          <li>
            <a href="#/">登入</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
