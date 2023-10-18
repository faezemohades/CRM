  
const ReusableButton = ({ title ,style}) => {
     return (
             <div>
             <button type="submit" className={`mt-4  ${style}`}>
                 {title}
                </button>
            </div>
    );
};

export default ReusableButton;
