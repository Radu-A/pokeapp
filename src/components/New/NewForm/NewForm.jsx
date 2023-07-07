import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ListContext } from "../../../context/listContext";

const NewForm = () => {

  const { pokeList, updatePokeList } = useContext(ListContext);

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
      height: "",
      weight: ""
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

      <input {...register("height") } placeholder="Height" />
      <p>{errors.height && errors.height.message}</p>

      <input {...register("weight") } placeholder="Weight" />
      <p>{errors.weight && errors.weight.message}</p>

      <button type="submit">ADD</button>
    </form>
    </section>
  )
};

export default NewForm;
