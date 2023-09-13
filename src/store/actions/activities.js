import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_activities_from_itinerary = createAsyncThunk(
    'read_activities_from_itinerary',
    async(itinerary_id) => {
        console.log(itinerary_id)
        try {
            let data = await axios(apiUrl+'activities?itinerary_id='+itinerary_id)
            //console.log(data)
            return {
                activities_from_itinerary: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                activities_from_itinerary: []
            }
        }
    }
)
//http://localhost:8080/api/activities?itinerary_id=64f227f58905ea3799ff0c5b
const activity_actions = { read_activities_from_itinerary }
export default activity_actions