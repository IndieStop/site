"use client";

import { Avatar, Dropdown } from "flowbite-react";

function AvatarDrop() {
	return (
		<Dropdown
			label={<Avatar alt="User settings" img="/favicon.svg" rounded />}
			arrowIcon={false}
			className=" bg-brand-base border-0 z-20 text-brand-surface"
			inline
		>
			<Dropdown.Item className="  z-20 text-brand-surface">
				Dashboard
			</Dropdown.Item>
			<Dropdown.Item className="  z-20 text-brand-surface">
				Settings
			</Dropdown.Item>
			<Dropdown.Item className="  z-20 text-brand-surface">
				Earnings
			</Dropdown.Item>
			<Dropdown.Item className="  z-20 text-brand-surface">
				Sign out
			</Dropdown.Item>
		</Dropdown>
	);
}

export default AvatarDrop;
