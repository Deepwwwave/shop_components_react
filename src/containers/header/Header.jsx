import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css"
import CountCart from "../../components/countCart/CountCart";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul className={styles.cart_list}>
        <li><Link to="/panier">Panier</Link></li>
        <li><CountCart></CountCart></li>
      </ul>
    </nav>
  );
}
