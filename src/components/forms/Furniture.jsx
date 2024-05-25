const Furniture = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="#height"
                        id="height"
                        name="height"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="#width"
                        id="width"
                        name="width"
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="#length"
                        id="length"
                        name="length"
                        onChange={handleChange}
                    />
                </div>
                <p className="information">Please provide dimensions in HxWxL format</p>
            </div>
        </fieldset>
    )
}

export default Furniture;