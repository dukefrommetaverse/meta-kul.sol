import Link from "next/link";
import React from "react";
import footerStyles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${footerStyles.footer}`}>
      <div className="text-white">
        &copy; 2022{" "}
        <span className={`text-white font-bold  ${footerStyles.span}`}>
          Metakul
        </span>
      </div>
      <></>
      <div>
              <ul className={` text-white flex space-x-8  ${footerStyles.footerUl}`}>
          <li>
                      <Link rel="noopener noreferrer" target="_blank" href="https://discord.gg/3MwNU73G7M">Join discord</Link>
          </li>
               
        </ul>
      </div>
    </div>
  );
}

export default Footer;
