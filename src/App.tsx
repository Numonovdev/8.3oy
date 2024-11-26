import imgHeader1 from "./assets/header.png"
import imgHeader2 from "./assets/header1.png"
import './App.css'
import { useEffect, useRef, useState } from "react"

function App() {


  

const logoRef = useRef<HTMLInputElement | null>(null);
const nameRef = useRef<HTMLInputElement | null>(null);
const lavozimRef = useRef<HTMLInputElement | null>(null);
const vaqtRef = useRef<HTMLSelectElement | null>(null);
const workRef = useRef<HTMLSelectElement | null>(null);
const joyRef = useRef<HTMLSelectElement | null>(null);
const newRef = useRef<HTMLInputElement | null>(null); 
const featureRef = useRef<HTMLInputElement | null>(null); 
const fullstackRef = useRef<HTMLInputElement | null>(null);
const midweightRef = useRef<HTMLInputElement | null>(null);
const pythonRef = useRef<HTMLInputElement | null>(null); 
const reactRef = useRef<HTMLInputElement | null>(null); 
const [data, setData] = useState<Type[]>([]);

interface Type {
  logo: string;
  name: string;
  lavozim: string;
  vaqt: string;
  work: string;
  joylashuv: string;
  isNew: boolean;
  isFeature: string;
  skills: string[];
  Id: number
}

useEffect(() =>{
  let data = localStorage.getItem('data')
  if (data) {
    setData(JSON.parse(data))
  }
},[])

function handleSave(e: React.FormEvent) {
  e.preventDefault();

  if (
    logoRef.current &&
    nameRef.current &&
    lavozimRef.current &&
    vaqtRef.current &&
    workRef.current &&
    joyRef.current
  ) {
    const isNew = newRef.current?.checked || true;
    const isFeature = featureRef.current?.checked? "Feature" : " ";
    const skills: string[] = [];
    if (fullstackRef.current?.checked) skills.push("Fullstack");
    if (midweightRef.current?.checked) skills.push("Midweight");
    if (pythonRef.current?.checked) skills.push("Python");
    if (reactRef.current?.checked) skills.push("React");

    let newData: Type = {
      logo: logoRef.current.value,
      name: nameRef.current.value,
      lavozim: lavozimRef.current.value,
      vaqt: vaqtRef.current.value,
      work: workRef.current.value,
      joylashuv: joyRef.current.value,
      isNew,
      isFeature,
      skills,
      Id: Date.now()
    };

    let copy = [...data, newData];
    setData(copy);

    localStorage.setItem("data", JSON.stringify(copy));
    
    logoRef.current.value = ''
    nameRef.current.value = ''
    lavozimRef.current.value = ''
    vaqtRef.current.value = 'Tanlang'
    workRef.current.value = 'Tanlang'
    joyRef.current.value ='Tanlang'
  }
}

function deletbtn(e:number) {
  let data3 = data.filter(function (value) {
    return value.Id != e
  })
  setData(data3)
  localStorage.setItem('data',JSON.stringify(data3))
}



  return (
    <>
    <header className='header'>
          <div className="header-container container">
             <img src={imgHeader1} className="imgHeader" alt="" />
             <img src={imgHeader2} className="imgHeader1" alt="" />
          </div>
    </header>
    <section className="container">
      
    <form className="max-w-[500px] shadow-lg mx-auto mt-2 p-7 mb-10">
        <h1 className="text-2xl font-semibold mb-4">
          Vakansiya ma'lumotlarini kiriting
        </h1>
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-xl font-semibold" htmlFor="logo">
            Logo URL
          </label>
          <input
            ref={logoRef}
            className="py-2 rounded-md outline-none px-3"
            type="text"
            name="logo"
            id="logo"
            placeholder="Logo URL manzilin kiritng"
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-xl font-semibold" htmlFor="logo">
            Kompaniya nomi
          </label>
          <input
            ref={nameRef}
            className="py-2 rounded-md outline-none px-3"
            type="text"
            name="logo"
            id="logo"
            placeholder="Manage"
          />
        </div>

        <div className="flex  gap-4 mb-5">
          <div className="flex flex-row gap-2 items-center">
            <input
              className="w-4 h-4"
              type="checkbox"
              name=""
              id="new"
            />
            <label className="font-semibold" htmlFor="new">
              Yangi
            </label>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <input
              className="w-4 h-4 "
              type="checkbox"
              name=""
              id="Feauter"
            />
            <label className="font-semibold" htmlFor="Feauter">
              Feauter
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label className="text-xl font-semibold" htmlFor="Lavozim">
            Lavozim
          </label>
          <input
            ref={lavozimRef}
            className="py-2 rounded-md outline-none px-3"
            type="text"
            name="logo"
            id="Lavozim"
            placeholder="Fulstack Developer"
          />
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold" htmlFor="vaqt">
              Vaqt
            </label>
            <select
              ref={vaqtRef}
              className="px-4 py-1 rounded-md"
              name=""
              id="vaqt"
            >
              <option selected value="Tanlang">
                Tanlang
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold" htmlFor="work">
              Ish turi
            </label>
            <select
              ref={workRef}
              className=" px-4 py-1 rounded-md"
              name=""
              id="work"
            >
              <option selected value="Tanlang">
                Tanlang
              </option>
              <option value="Full time">Full time</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold" htmlFor="joyashuv">
              Joyashuv
            </label>
            <select
              ref={joyRef}
              className=" px-4 py-1 rounded-md"
              name=""
              id="joyashuv"
            >
              <option selected value="Tanlang">
                Tanlangan
              </option>
              <option value="USA">USA</option>
              <option value="UZB">UZB</option>
              <option value="RUS">RUS</option>
              <option value="GER">GER</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-xl font-semibold" htmlFor="kunikma">
            Kunikma
          </label>
          <div className="flex gap-7">
            <div className="flex flex-row gap-2 items-center">
              <input ref={fullstackRef}
                className="w-4 h-4"
                type="checkbox"
                name=""
                id="fullstack"
              />
              <label className=" font-semibold" htmlFor="fullstack">
                Fullstack
              </label>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <input ref={midweightRef}
                className="w-4 h-4"
                type="checkbox"
                name=""
                id="midweight"
              />
              <label className="font-semibold" htmlFor="midweight">
                Midweight
              </label>
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex flex-row gap-2 items-center">
              <input ref={pythonRef} className="w-4 h-4" type="checkbox" name="" id="python" />
              <label className="font-semibold" htmlFor="python">
                Python
              </label>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <input ref={reactRef} className="w-4 h-4" type="checkbox" name="" id="react" />
              <label className="font-semibold" htmlFor="react">
                React
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="py-2 bg-slate-900 text-white rounded-md border-none w-full mt-4"
        >
          Join
        </button>
      </form>

    </section>
    <main className="main">
  <div className="main-container container">
    {data.map((item) => (
      <div className="blockk flex" key={item.Id}>
        <div className="information">
          <img src={item.logo} alt={item.name} />
          <div className="info">
            <div className="info-top">
              <span>{item.name}</span>
              {item.isNew && <button className="new">NEW!</button>}
              {item.isFeature && <button className="FEATURED">{item.isFeature}</button>}
            </div>
            <div className="info-midle">
              <span>{item.lavozim}</span>
            </div>
            <div className="info-bottom">
              <span>{item.vaqt}</span>
              <div></div>
              <span>{item.work}</span>
              <div></div>
              <span>{item.joylashuv}</span>
            </div>
          </div>
        </div>
        <div className="language">
          {item.skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
        <button onClick={() => deletbtn(item.Id)} className="delete-btn bg-red-600 px-3 py-2 rounded-lg text-white font-semibold">O'chirish</button>
      </div>
    ))}
  </div>
</main>
    </>
  )
}

export default App
