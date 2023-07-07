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
          const resp = await fetch(`https://pokeapi.co/api/v2/type`);
          const data = await resp.json();
          setTypes(data.results);
          console.log('Fetch to type');
          console.log(types);
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

  console.log(watch());

  return (
    <section className="new-form-section">
      <form onSubmit={handleSubmit(data=>{
      updatePokeList(data);
    })}>
      <input {...register("name", {required: 'This is required.'}) } placeholder="Name" />
      <p>{errors.name && errors.name.message}</p>

      <input {...register("url", {required: 'This is required.'}) } placeholder="Url" />
      <p>{errors.url && errors.url.message}</p>

      <input {...register("base_experience") } placeholder="Base experience" />
      <p>{errors.base_experience && errors.base_experience.message}</p>

      <select {...register("typeOne")}>
        {types && types.map(type=><option key={uuidv4()} value="typeOne">{type.name}</option>)}
      </select>
      <p>{errors.base_experience && errors.base_experience.message}</p>

      <select {...register("typeTwo")}>
        {types && types.map(type=><option key={uuidv4()} value="typeTwo">{type.name}</option>)}
      </select>
      <p>{errors.base_experience && errors.base_experience.message}</p>

      <button type="submit">ADD</button>
    </form>
    </section>
  )
};

export default NewForm;
