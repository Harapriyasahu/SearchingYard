import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterData, fetchProducts, sortProducts, sortProductslh } from "../redux/action";
import styles from './style.module.css';
// import Search from './Search';

const Filter = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchProducts());
      }, []);
    
    function handleSort(e) {
        let value = e.target.value;
        if (value === "lh") {
          dispatch(sortProductslh());
        }
        if (value === "hl") {
          dispatch(sortProducts());
        }
      }
      function handleCat(e) {
        let value = e.target.value;
        if (value === "men's clothing") {
          dispatch(filterData("men's clothing"));
        }
        if (value === "women's clothing") {
          dispatch(filterData("women's clothing"));
        }
        if (value === "jewelery") {
          dispatch(filterData("jewelery"));
        }
        
      }
    return (
        <div style={{display:"flex"}}>
          {/* <div>
            <Search/>
          </div> */}
            <div className={styles.sortDiv}>
                <select className={styles.sorting} placeholder="Price"  onChange={handleSort}>
                    <option value="lh">low to high</option>
                    <option value="hl">high to low</option>
                </select>
                <select className={styles.category} placeholder="Category"  onChange={handleCat}>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelry</option>
                </select>
            </div>
        </div>
    )
}

export default Filter