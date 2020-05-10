import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get all unique values
const getUnique = (items, value) =>{
return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
    const context= useContext(RoomContext);
    const {
        handelChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    }=context;
    let types = getUnique(rooms, 'type');
    types= ['all', ...types];
types=types.map((type, index) => {return <option key={index} value={type}>{type}</option>})
let people = getUnique(rooms, 'capacity');
people = people.map((item, index) => {return <option key={index} value={item}>{item}</option>})
    return (
        <section className="filter-container">
            <Title title="search room"/>
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" 
                    onChange={handelChange}>         
                        {types}
                    </select>
                </div>
                {/* end of select type*/}
                 {/* Guests */}
                 <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" 
                    onChange={handelChange}>         
                        {people}
                    </select>
                </div>
                {/* end of Guests*/}
                {/* room price*/}
                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input type="range" name='price' min={minPrice} max={maxPrice} id="price" value={price}
                onChange={handelChange} className="form-control"/>
                </div>
                {/* end of room price*/}
                {/* size*/}
                <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handelChange}
                    className="size-input"/>
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handelChange}
                    className="size-input"/>
                </div>
                </div>
                 {/* end of size*/}
                 {/* extras*/}
                 <div className="form-group">
                 <div className="single-extra">
                     <input type="checkbox" name="breakfast" id="breakfast" onChange={handelChange}
                     checked={breakfast}/>
                     <label htmlFor="breakfast">breakfast</label>
                 </div>
                 <div className="single-extra">
                     <input type="checkbox" name="pets" id="pets" onChange={handelChange} 
                     checked={pets}/>
                     <label htmlFor="pets">pets</label>
                 </div>
                 </div>
                 {/* end of extras*/}
            </form>
        </section>
    )
}
