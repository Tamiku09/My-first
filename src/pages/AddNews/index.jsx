import React from "react";
import {useForm} from "react-hook-form"
import cls from "../../Styles/AddNewsStyles/index.module.scss"
export const AddNews = () => {
    {
        var result =1 
        var arr = [2,3,4,5]
        for (var i =0;i<arr.length;i++){
            result= result * arr[i]
        }
        console.log(result);
    }
    const [news,setNews] = React.useState(
        JSON.parse(localStorage.getItem("news")) || []
    )
    React.useEffect(() => {
        localStorage.setItem("news",JSON.stringify(news))
    },[news])
    const{
        register,
        formState:{errors},
        handleSubmit,
        reset
        
    } = useForm()
   
    const handle =(ValueNews)=> {
        setNews((item) => [...item,{...ValueNews,id:item.lenght}])
        
        reset()
    }
        return(
        <div className={cls.add}>
            <h2>Add news page</h2>
            <form onSubmit={handleSubmit(handle)} className={cls.form_news}>
                <div>
                    <input 
                    { ...register("category",{
                        required: "category is required field",
                        minLength: {
                            value:3,
                            message: "min lenght 3"

                        },
                        maxLength: {
                            value:10,
                            message: "max length 10"
                    },

                    })

                    }
                    type="text"
                    placeholder="Enter category"
                    />
                    {errors.category && <p>{errors.category.message}</p>}
                </div>
                <div>
                    <input 
                    {...register('title',{
                        required:"title is required failed",
                        minLength: {
                            value: 15,
                            message:"min length 15"
                        },
                        maxLength:{
                            value: 60,
                            message: "max length 60",
                        },
                    })

                    }
                    type="text" placeholder="Enter title" />
                    {errors.title  && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <input 
                   {...register('img',{
                    required:"img is required failed",
            })}

                    type="text" placeholder="Enter Img" />
                    {errors.img && <p>{errors.img.message}</p> }
                </div>
                <div>
                    <textarea 
                     {...register('info',{
                        required:"info is required failed",
                        minLength: {
                            value: 25,
                            message:"min length 15"
                        },
                        maxLength:{
                            value: 700,
                            message: "max length 700",
                        },
                    })}
                    type="text" placeholder="Enter Info" />
                    {errors.info && <p>{errors.info.message}</p>}
                </div>
                <div className={cls.send}>
                    <button>send</button>

                </div>
            </form>

        </div>
    )
}