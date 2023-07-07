import { useForm } from "react-hook-form"

const NewForm = () => {
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
    <form onSubmit={handleSubmit(data=>{
      console.log(data);
    })}>
      <input {...register("name", {required: 'This is required.'}) } placeholder="Name" />
      <p>{errors.name && errors.name}</p>
      
      <input {...register("name", {required: 'This is required.'}) } placeholder="Name" />
      <p>{errors.name && errors.name}</p>

      <input {...register("base_experience") } placeholder="Base experience" />
      <p>{errors.base_experience && errors.base_experience.message}</p>

      <input {...register("height") } placeholder="Height" />
      <p>{errors.height && errors.height.message}</p>

      <input {...register("weight") } placeholder="Weight" />
      <p>{errors.weight && errors.weight.message}</p>

      <button type="submit">ADD</button>
    </form>
  )
};

export default NewForm;
