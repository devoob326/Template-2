import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[210mm] h-[297mm] bg-[white] border m-[10mm] border-solid border-[black] ml-[364px]">

    <div className="bg-[rgb(91,80,155)] w-[180mm] h-[60mm] absolute flex rounded-[250px_0_0_250px] left-[477px] top-[120px]">
      <div className="circle"></div>
      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[40%]">
        <h1 className='text-[whitesmoke] text-[40px] font-[bold]'>Devraj Patil</h1>
        <div className="text-[whitesmoke] text-[25px] font-extralight"><h3>Full Stack Developer</h3></div>
      </div>

      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 text-[whitesmoke] text-[15px] font-extralight w-[200px] left-[90%] top-2/4">
        <p className='mt-[5px]'>Email: abcd@cde.com</p>
        <p className='mt-[5px]'>Linkedin: abcdefgg</p>
        <p className='mt-[5px]'>Ph.no: 98745632100 </p>
      </div>
    </div>
    <div>
      <div className="bg-[rgb(91,80,155)] w-[120mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[35%] top-[60%]">
        <p className=' text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[70%] top-[0%] ml-[10px] mt-[10px]'>Professional Experience</p>
      </div>
      <div className="flex flex-col absolute -translate-x-2/4 -translate-y-2/4 left-[36.3%] top-[85%]">
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='workp'>Jim's Widget Factory, <br /> Plano,
Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='workp'>Jim's Widget Factory, <br /> Plano,
Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='workp'>Jim's Widget Factory, <br /> Plano,
Human Resources Manager</p></div>
        <div className="flex flex-row justify-start items-center"><div className="ellipsething"></div><p className='workp'>Jim's Widget Factory, <br /> Plano,
Human Resources Manager</p></div>
      </div>
    </div>
    <div className="bg-[rgb(91,80,155)] w-[80mm] h-[15mm] absolute -translate-x-2/4 -translate-y-2/4 rounded-[0_250px_250px_0] left-[30.%] top-[110%] ml-[151px]">
    <p className='text-[rgb(234,230,254)] text-3xl font-bold w-[400px] left-[105%] top-[0%] ml-[15px] mt-[10px]'>Education</p>
    </div>
    <div className="flex flex-row justify-start items-center absolute -translate-x-2/4 -translate-y-2/4 text-[15px] font-extralight w-[400px] text-[rgb(60,60,60)] left-[37%] top-[125%]">
      <ul>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
        <li className='list-disc text-[17px] font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>Studied from Harward university</li>
      </ul>
    </div>
      <div className="flex flex-row">
        <div className="bg-[rgb(244,245,244)] w-[65%] h-[297mm]">
          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[400px] text-[rgb(90,80,154)] text-justify w-60 left-[60.5%] top-[80%]">
            <p>
            Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hiretraining initiatives as well asongoing training to adhere toworkplace safety standards.Worked with OSHA to ensurethat all safety regulations arefollowed.</p>
          </div>

          <div className="absolute -translate-x-2/4 -translate-y-2/4 text-lg font-[bold] w-[400px] text-[rgb(90,80,154)] text-justify w-60 left-[62%] top-[125%]">
            <h2 className='text-[25px]'>Skills</h2>
            <ul className='list-disc text-lg font-[bold] w-[400px] text-[rgb(60,60,60)] ml-0 my-2.5'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> 
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="bg-[rgb(234,230,254)] w-[35%]">
          {/* <h1>helo</h1> */}
        </div>
      </div>
      


    </div>
  )
}

export default App
