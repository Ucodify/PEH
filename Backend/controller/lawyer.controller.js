import Law from "../model/lawyer.model.js";



export const getLawyer = async (req, res) => {
    try {
        const law = await Law.find()
        res.status(200).json(law)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
