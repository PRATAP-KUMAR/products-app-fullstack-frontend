const Furniture = () => {
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
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="#width"
                        id="width"
                        name="width"
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="#length"
                        id="length"
                        name="length"
                    />
                </div>
                <p className="information">Please provide dimensions in HxWxL format</p>
            </div>
        </fieldset>
    )
}

export default Furniture;