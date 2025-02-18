import Details from "../model/details.model.js";

export const getDetails = async (req, res) => {
    //console.log("Details of id: ", req.params.id);
    try {
        const { id: profile } = await Details.findById(req.params);
        // const { id: profDetails } = req.user(profile);
        res.status(200).json(profile);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}










