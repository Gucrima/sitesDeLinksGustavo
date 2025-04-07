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
      <p>Aqui possui alguns Contatos e Projetos meus</p>
        <a className='texto-botao' href="">
        <button className='botao-dos-links2'> <TbBrandGithubFilled className='icon-git'/>GitHub</button>
        </a>
        <a className='texto-botao' href="">
        <button className='botao-dos-links3'> <FaLinkedin className='icon-git' /> Linkdln</button>
        </a>
        <a className='texto-botao' href="">
        <button className='botao-dos-links4'> <FaInstagram className='icon-git' /> Instagram</button>
        </a>
        <a className='texto-botao' href="">
        <button className='botao-dos-links5'> <BiLogoGmail className='icon-git' /> Gmail</button>
        </a>
        <a className='texto-botao' href="">
        <button className='botao-dos-links6'> <FaSpotify className='icon-git' /> Spotify</button>
        </a>
        <a className='texto-botao' href="">
        <button className='botao-dos-links'>JW.org</button>
        </a>
      </div>
    </div>
  )
}

export default App
