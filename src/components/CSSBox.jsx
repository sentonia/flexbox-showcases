const CSSBox = ({ cssCode }) => {
    return (
        <pre className="css-code-snippet">
            <code>
                <span className='css-code-snippet__title'>{'// CSS code snippet:'}</span>
                <text>{cssCode}</text>
            </code>
        </pre>
    )
}

export default CSSBox;