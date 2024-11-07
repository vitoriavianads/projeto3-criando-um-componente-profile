import Profile from "./components/Profile"

export default function App(){
  return(
    <body>
      <div>
      <Profile
      img={'./foto.jpg'}
      name={'Vitória Viana'} 
      bio={'Estudante de Desenvolvimento de Sistemas da EEEP Deputado Roberto Mesquita'} 
      phone={'+ 55 (85) 994267414'}
      email={'vianaanavitoria75@gmail.com'} 
      instaUrl={'https://www.instagram.com/viitoriaviana_'}
      githubUrl={'https://github.com/vitoriavianads'}
      ></Profile>
      </div>
    </body> 
  )
}

