import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import {createProduct} from '../firebase/product'
import {Link} from 'react-router-dom'
function CreateProduct(props) {
  const {register, handleSubmit, reset} = useForm();
  const [isLoading, setLoading] = useState(false)
  const onSubmit = async(data) =>{
    setLoading(true)
    try{
      console.log(data)
      await createProduct(data)
      reset()
      setLoading(false)
    }catch(error){
      console.log(error)
    }
  }
  const formClassName = `ui form ${isLoading ? 'loading':''}`;
  return (
    <div className="login-container">
      <div >
        <div className="content">
          <form className={formClassName} 
          onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label>
                  Product Name
                  <input ref={register}
                    type="text"
                    name="name"
                    placeholder="Name"
                    
                  />
                </label>
              </div>
              
            <div className="field">
              <label>
                Price
                <input type="number" name="price" placeholder="Price"  
                ref={register}/>
              </label>
            </div>

            <div className="field actions">
            <button className="ui primary button login" type="submit">
            Create product
            </button>
           
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
