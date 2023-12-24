const InitialLoading = ({ image }) => {
	return (
		<div className="h-screen flex items-center justify-center">
			<img src={image} alt="" className="m-auto rounded-xl w-80 h-60" />
		</div>
	);
};

export default InitialLoading;
