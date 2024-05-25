const Book = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="#weight"
                        id="weight"
                        name="weight"
                        onChange={handleChange}
                    />
                </div>
                <p className="information">Please provide weight of the book in KG's</p>
            </div>
        </fieldset >
    )
}

export default Book;