import React from 'react'
import './FrontComOsLinks.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import PlayListGustavo from './PlayListGustavo';

function FrontComOsLinks() {
  return (
    <div className='container'>
      <div className="conteiner-links">
        <img className='FotoGustavo'src="Images/gustavoFoto.png" alt="" />
      <h1>Gustavo Franco</h1>
       <PlayListGustavo/>
        <a className='texto-botao' href="https://portifolio-gustavo-nu.vercel.app/">
        <button className='botao-dos-links6'> <FaRegUserCircle className='icon-git' />Meu portifólio</button>
        </a>
        <a className='texto-botao' href="https://github.com/Gucrima">
        <button className='botao-dos-links1'> <TbBrandGithubFilled className='icon-git'/>GitHub</button>
        </a>
        <a className='texto-botao' href="https://www.linkedin.com/in/gustavo-franco-83b4022a7/">
        <button className='botao-dos-links2'> <FaLinkedin className='icon-git' /> Linkdln</button>
        </a>
        <a className='texto-botao' href="https://www.instagram.com/gustavo.sfranco/">
        <button className='botao-dos-links3'> <FaInstagram className='icon-git' /> Instagram</button>
        </a>
        <a className='texto-botao' href="mailto:gusssoares09@gmail.com?subject=olá">
        <button className='botao-dos-links4'> <BiLogoGmail className='icon-git' /> Gmail</button>
        </a>
        <a className='texto-botao' href="https://open.spotify.com/user/z846rwhf4c886bri8p69spqph?si=6e2978dccbc64ed8">
        <button className='botao-dos-links5'> <FaSpotify className='icon-git' /> Spotify</button>
        </a>
        <a className='texto-botao' href="https://github.com/Gucrima/PrimeirosProjetosEmCS">
        <button className='botao-dos-links7'> Repositório de <PiFileCSharp className='icon-cs' /></button>
        </a>
      </div>
    </div>
  )
}

export default FrontComOsLinks
