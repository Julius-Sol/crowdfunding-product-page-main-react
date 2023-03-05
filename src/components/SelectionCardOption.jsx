import React, {useState} from 'react'

export default function SelectionCardOption(props) {
  const [formData ,setFormData] = useState({reward:""});

  const handleChange = (event) => {
    const {name,type,checked, value} = event.target;
    setFormData(prevFormData=>{
      return({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value 
      })
    })
  }

  console.log(formData.reward)

  return (
    <section>
      <div className='flex items-center gap-3'>
        <form action="">
          <input className='hidden'
                    type="radio"
                    id="no-reward"
                    name="reward"
                    value="no-reward"
                    checked={formData.reward === "no-reward"}
                    onChange={handleChange}
                />
            <label htmlFor="no-reward" className='flex items-center gap-2'>
              <div className='flex h-5 w-5 border-[.1rem] rounded-full justify-center items-center'>
                {formData.reward === "no-reward"?<div className='h-2 w-2 bg-Moderate-cyan rounded-full'></div> : ""}
              </div>
              <div>
                <h1 className='text-xs font-bold'>{props.title}</h1> {props.subtitle? <p className='text-xs text-Moderate-cyan'>{props.subtitle}</p>: "" }
              </div>
            </label>

        </form>
        {/* 
         */}
      </div>
    </section>
  )
}
