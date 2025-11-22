"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Divide } from "react-feather";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
  }, []);

  const handleChange = (value) => {
    setLang(value);
    localStorage.setItem("lang", value);
  };

  return (
    <select
    value={lang}
    onChange={(e) => handleChange(e.target.value)}
    className="bg-transparent text-white text-sm font-semibold border-0 outline-none cursor-pointer"
  >
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="uz">UZ</option>
  </select>
     
      
  );
}