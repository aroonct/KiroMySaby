import React from 'react';
import { faWhatsapp, faTelegram, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Inicio.css';
import imgdefault from '../img/imgdefault.jpg';
import html2canvas from 'html2canvas';

// Funciones herramientas

function mostrarimagen(){
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('subirimagen').innerHTML = '<img id="imagen" src="' + reader.result + '" alt="imagen" />';
    }
    reader.readAsDataURL(file);
};

function textosuperior(){
    var texto = document.getElementById('textoenimagen').value;
    var imagen = document.getElementById('subirimagen').innerHTML;
    var imagencontexto = imagen + '<div id="texto" class="textosuperior">' + texto + '</div>';
    document.getElementById('subirimagen').innerHTML = imagencontexto;
}

function textoinferior(){
    var texto = document.getElementById('textoenimageninferior').value;
    var imagen = document.getElementById('subirimagen').innerHTML;
    var imagencontexto = imagen + '<div id="texto" class="textoinferior">' + texto + '</div>';
    document.getElementById('subirimagen').innerHTML = imagencontexto;
}

function textos(){
    textosuperior();
    textoinferior();
}

function eliminartextosuperior(){
    var eliminartexto = document.getElementsByClassName('textosuperior');
    eliminartexto[0].remove();
}

function eliminartextoinferior(){
    var eliminartexto = document.getElementsByClassName('textoinferior');
    eliminartexto[0].remove();

}

function guardarimagen(){
    var imagen = document.getElementById('subirimagen');
    html2canvas(imagen).then(function(canvas){
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = canvas.toDataURL();
        link.click();
    });

}

// Fin funciones herramientas

function Inicio() {
  return (
    <div>
      <main className='contgenerador' >
        <h1 className='title' >Generador de memes</h1>
        <div className="enlaces">
            <a className='link' target="_blank" href="https://wa.link/ajvoax"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a className='link' target="_blank" href="https://t.me/begin24"><FontAwesomeIcon icon={faTelegram} /></a>
            <a className='link' target="_blank" href="https://github.com/kirohn24"><FontAwesomeIcon icon={faGithub} /></a>
            <a className='link' target="_blank" href="https://kiro.vercel.app"><FontAwesomeIcon icon={faHashnode} /></a>
        </div>
        <p className='desc' >Elige una imagen de la lista o sube una imagen de tu computadora</p>
        <div  className="contenedor-botonsubirimagen">
        <input type="file" name="file" id="file" className="btnsubirf" />
        <button className='btn' onClick={mostrarimagen}>Actualizar</button>
        </div>
        <div className='contenedor'>
            <div id='subirimagen'  className='contenedor-imagen'>
                <img id='imagen' src={imgdefault} alt='imagen' />
            </div>
            <div className='contenedor-texto'>
                <input className='inputtext' id='textoenimagen' type='text' placeholder='Texto superior' />
                <input className='inputtext' id='textoenimageninferior' type='text' placeholder='Texto inferior' />
            </div>
        </div>
        <div className='contenedor-botones'>
            <div className="btnprincipal contbtn">
            <button className='btn' onClick={textos} >Generar</button>
            <button className='btn' onClick={guardarimagen} >Guardar</button>
            </div>
            
            <div className="btneliminar contbtn">
            <button className='btn' onClick={eliminartextosuperior} >Eliminar texto superior</button>
            <button className='btn' onClick={eliminartextoinferior} >Eliminar texto inferior</button>
            </div>
            
        </div>

      </main>
    </div>
  );
}

export default Inicio;