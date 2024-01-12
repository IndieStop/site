import React from "react";
import { Carousel } from "flowbite-react";

function SLideShow() {
	return (
		<div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 animate-fade-right -z-10">
			<Carousel pauseOnHover draggable="true" slideInterval={4000}>
				<img
					src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"
				></img>
				<img src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"></img>
				<img src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"></img>
				<img src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"></img>
				<img src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"></img>
				<img src="https://cdn.discordapp.com/attachments/1002669912969449606/1193241331070419137/googledocmediakix2lbg3lvm896x_658d138aa4de5.png?ex=65abff96&is=65998a96&hm=ccc1c3cfc30bb15105ebae5671d0a14012a1a030ea6aa65b15757a3f1e807a7c&"></img>
			</Carousel>
		</div>
	);
}
export default SLideShow;
