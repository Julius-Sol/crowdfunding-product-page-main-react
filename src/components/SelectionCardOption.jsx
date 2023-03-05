import React, {useState} from 'react'

export default function SelectionCardOption(props) {
  const [formData ,setFormData] = useState({reward:"",pledgeAmount:0});

  const [info,setInfo] = useState(
    {Bamboo:{numberLeft:1},Black:{numberLeft:64},Mahogony:{numberLeft:0}})  

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
        <form action="" className=''>

          {/* No-rewards */}
          <div className='border-2 px-2 py-5 mb-5'>
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
                  <h1 className='text-xs font-bold'>Pledge with no reward</h1>
                </div>
              </label>
              <p className='text-xs text-Dark-gray mt-5 mb-3'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
              <div>
                <hr />
                <p className='text-center p-6 text-Dark-gray text-sm font-bold'>Enter your pledge</p>
                <div className='flex gap-5 items-center'>
                  <div className='flex items-center'>
                    <span className=' text-gray-600 opacity-75 relative left-8'>$</span>
                    <input type="text" className='w-[6.4rem] border-2 rounded-full p-2 text-center' name="pledgeAmount" value={formData.pledgeAmount} onChange={handleChange}/>
                  </div>
                  <button className=' bg-Moderate-cyan rounded-full py-2 px-6 text-white font-bold hover:bg-Dark-cyan'>Continue</button>
                </div>
              </div>
            </div>

            {/* Bamboo*/}
            <div className='border-2 px-2 py-5 mb-5'>
            <input className='hidden'
                      type="radio"
                      id="Bamboo"
                      name="reward"
                      value="Bamboo"
                      checked={formData.reward === "Bamboo"}
                      onChange={handleChange}
                  />
              <label htmlFor="Bamboo" className='flex items-center gap-2'>
                <div className='flex h-5 w-5 border-[.1rem] rounded-full justify-center items-center'>
                  {formData.reward === "Bamboo"?<div className='h-2 w-2 bg-Moderate-cyan rounded-full'></div> : ""}
                </div>
                <div>
                  <h1 className='text-xs font-bold mb-1'>Bamboo Stand</h1>
                  <p className='text-xs text-Moderate-cyan'>Pledge $25 or more</p>
                </div>
              </label>
              <p className='text-xs text-Dark-gray mt-5 mb-3'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.</p>
              <p className='text-base font-bold mb-5'>101<span className='relative text-base text-Dark-gray -top-.8 left-1'>left</span></p>
              <div>
                <hr />
                <p className='text-center p-6 text-Dark-gray text-sm font-bold'>Enter your pledge</p>
                <div className='flex gap-5 items-center'>
                  <div className='flex items-center'>
                    <span className=' text-gray-600 opacity-75 relative left-8'>$</span>
                    <input type="text" className='w-[6.4rem] border-2 rounded-full p-2 text-center' name="pledgeAmount" value={formData.pledgeAmount} onChange={handleChange}/>
                  </div>
                  <button className=' bg-Moderate-cyan rounded-full py-2 px-6 text-white font-bold hover:bg-Dark-cyan'>Continue</button>
                </div>
              </div>
            </div>

            {/* Black Edition*/}
            <div className='border-2 px-2 py-5 mb-5'>
            <input className='hidden'
                      type="radio"
                      id="Black"
                      name="reward"
                      value="Black"
                      checked={formData.reward === "Black"}
                      onChange={handleChange}
                  />
              <label htmlFor="Black" className='flex items-center gap-2'>
                <div className='flex h-5 w-5 border-[.1rem] rounded-full justify-center items-center'>
                  {formData.reward === "Black"?<div className='h-2 w-2 bg-Moderate-cyan rounded-full'></div> : ""}
                </div>
                <div>
                  <h1 className='text-xs font-bold mb-1'>Black Edition Stand</h1>
                  <p className='text-xs text-Moderate-cyan'>Pledge $75 or more</p>
                </div>
              </label>
              <p className='text-xs text-Dark-gray mt-5 mb-3'>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
              <p className='text-base font-bold mb-5'>64<span className='relative text-base text-Dark-gray -top-.8 left-1'>left</span></p>
              <div>
                <hr />
                <p className='text-center p-6 text-Dark-gray text-sm font-bold'>Enter your pledge</p>
                <div className='flex gap-5 items-center'>
                  <div className='flex items-center'>
                    <span className=' text-gray-600 opacity-75 relative left-8'>$</span>
                    <input type="text" className='w-[6.4rem] border-2 rounded-full p-2 text-center' name="pledgeAmount" value={formData.pledgeAmount} onChange={handleChange}/>
                  </div>
                  <button className=' bg-Moderate-cyan rounded-full py-2 px-6 text-white font-bold hover:bg-Dark-cyan'>Continue</button>
                </div>
              </div>
            </div>

            {/* Mahogany*/}
            <div className={`border-2 px-2 py-5 mb-5 ${info.Mahogony.numberLeft? "": "opacity-40 pointer-events-none"}`}>
            <input className='hidden'
                      type="radio"
                      id="Mahogany"
                      name="reward"
                      value="Mahogany"
                      checked={formData.reward === "Mahogany"}
                      onChange={handleChange}
                  />
              <label htmlFor="Mahogany" className='flex items-center gap-2'>
                <div className='flex h-5 w-5 border-[.1rem] rounded-full justify-center items-center'>
                  {formData.reward === "Mahogany"?<div className='h-2 w-2 bg-Moderate-cyan rounded-full'></div> : ""}
                </div>
                <div>
                  <h1 className='text-xs font-bold mb-1'>Mahogany Special Edition</h1>
                  <p className='text-xs text-Moderate-cyan'>Pledge $200 or more</p>
                </div>
              </label>
              <p className='text-xs text-Dark-gray mt-5 mb-3'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
              <p className='text-base font-bold mb-5'>0<span className='relative text-base text-Dark-gray -top-.8 left-1'>left</span></p>
              <div>
                <hr />
                <p className='text-center p-6 text-Dark-gray text-sm font-bold'>Enter your pledge</p>
                <div className='flex gap-5 items-center'>
                  <div className='flex items-center'>
                    <span className=' text-gray-600 opacity-75 relative left-8'>$</span>
                    <input type="text" className='w-[6.4rem] border-2 rounded-full p-2 text-center' name='pledgeAmount' value={formData.pledgeAmount} onChange={handleChange}/>
                  </div>
                  <button className=' bg-Moderate-cyan rounded-full py-2 px-6 text-white font-bold hover:bg-Dark-cyan'>Continue</button>
                </div>
              </div>
            </div>
        </form>
      </div>
    </section>
  )
}
