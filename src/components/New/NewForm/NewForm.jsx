import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../../context/listContext";
import { v4 as uuidv4 } from 'uuid';

const NewForm = () => {

  const { pokeList, updatePokeList } = useContext(ListContext);

  const [types, setTypes] = useState([]);

  useEffect(() => {

    const getPokemon = async () => {
      try {
        console.log('estoy haciendo fetch')
          const resp = await fetch(`https://pokeapi.co/api/v2/type`);
          const data = await resp.json();
          setTypes(data.results);
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon();
  },[])
  
  const { 
    register, 
    handleSubmit,
    watch,
    formState: {errors}
   } = useForm({
    defaultValues: {
      name: "",
      url: "",
      base_experience: "",
      typeOne: "",
      typeTwo: ""
    }
   });

  // console.log(watch());

  return (
    <>
    <section className="new-form-section">
      <h1>Create your own pokemon</h1>
      <form className="new-form" onSubmit={handleSubmit(data=>{
      updatePokeList(data);
    })}>
      <input {...register("name", {required: 'This is required', minLength: {
        value: 3,
        message: 'At least 3 characters'
      }}) } placeholder="Name" />
      <p className="error-message">{errors.name && errors.name.message}</p>

      <input {...register("url", {required: 'This is required'}) } placeholder="Url" />
      <p className="error-message">{errors.url && errors.url.message}</p>

      <input {...register("base_experience", {required: 'This is required'}) } placeholder="Base experience" />
      <p className="error-message">{errors.base_experience && errors.base_experience.message}</p>

      <select {...register("typeOne", {required: 'This is required'})}>
        {types && types.map(type=><option key={uuidv4()} value={type.name}>{type.name}</option>)}
      </select>
      <p className="error-message">{errors.typeOne && errors.typeOne.message}</p>

      <select {...register("typeTwo")}>
        {types && types.map(type=><option key={uuidv4()} value={type.name}>{type.name}</option>)}
      </select>
      <p className="error-message">{errors.typeTwo && errors.typeTwo.message}</p>

      <button type="submit">ADD</button>
    </form>
    </section>
    </>
  )
};

export default NewForm;
