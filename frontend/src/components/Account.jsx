import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { getAuthData } from "../utils";

const Account = ({
  account_name,
    show_account_dropdown,
    profile_links,
  onClick,
  logout,
}) => {
  const { account_type } = getAuthData();
  const showClass = show_account_dropdown === true ? "active" : "hidden";
  const links =
  profile_links !== undefined && profile_links.length !== 0 &&
    profile_links.map(({ title, to, permissions }, index) => {
      return (
         (
          <li key={index} className="licssoverrde">
            <NavLink to={to} activeClassName="active" title={title} >
              {title}
            </NavLink>
          </li>
        )
      );
    });


  return (
    <div className="account-in profilepiccss">
      <div className="account-link" onMouseOver={onClick} onClick={() =>{
        window.location.href="/my-account"
      }}>
        <p>My Account</p>
      </div>
      <div className={`account-links ${showClass}`}>
        <ul className ="defaultUIOverride myaccount110">{links}</ul>
        
      </div>
    </div>
  );
};

export default Account;
