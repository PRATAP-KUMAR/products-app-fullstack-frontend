const Book = () => {
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="Weight in Grams"
                        id="weight"
                        name="weight"
                    />
                </div>
                <p className="information">Please provide weight of the book in Grams&#39;s</p>
            </div>
        </fieldset >
    )
}

export default Book;