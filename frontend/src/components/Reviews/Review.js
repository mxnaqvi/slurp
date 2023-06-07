import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchBusiness, getBusiness } from "../../store/businessReducer"

const Reviews = () => {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    
    return (
        <div className="reviews">
            <h1>Reviews</h1>
        </div>
    )
}

export default Reviews