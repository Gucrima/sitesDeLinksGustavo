import './App.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";

function App() {
 

  return (
    <div className="fundo-dos-links">
      <div className="conteiner-links">
        <img className='FotoGustavo'src="Images/gustavoFoto.png" alt="" />
      <h1>Gustavo Franco</h1>
        <a className='texto-botao' href="https://github.com/Gucrima">
        <button className='botao-dos-links2'> <TbBrandGithubFilled className='icon-git'/>GitHub</button>
        </a>
        <a className='texto-botao' href="https://www.linkedin.com/in/gustavo-franco-83b4022a7/">
        <button className='botao-dos-links3'> <FaLinkedin className='icon-git' /> Linkdln</button>
        </a>
        <a className='texto-botao' href="https://www.instagram.com/gustavo.sfranco/">
        <button className='botao-dos-links4'> <FaInstagram className='icon-git' /> Instagram</button>
        </a>
        <a className='texto-botao' href="mailto:gusssoares09@gmail.com?subject=olá">
        <button className='botao-dos-links5'> <BiLogoGmail className='icon-git' /> Gmail</button>
        </a>
        <a className='texto-botao' href="https://open.spotify.com/user/z846rwhf4c886bri8p69spqph?si=6e2978dccbc64ed8">
        <button className='botao-dos-links6'> <FaSpotify className='icon-git' /> Spotify</button>
        </a>
        <a className='texto-botao' href="https://www.jw.org/pt/testemunhas-de-jeova/">
        <button className='botao-dos-links'>JW.org</button>
        </a>
      </div>
    </div>
  )
}

export default App
