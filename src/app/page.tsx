import Image from "next/image";
import StarImage from "@/assets/icon/star.svg";
import Card from "./components/Card";
import PuzzleIcon from "@/assets/icon/puzzle.png";
import AppStoreIcon from "@/assets/icon/app-store.svg";
import PlayStoreIcon from "@/assets/icon/play-store.svg";
import LandingPageAccordion from "./components/LandingPageAccordion";

export default function Home() {
	return (
		<div className="px-[80px]">
			<section className="h-[calc(100svh-68px)] flex relative">
				<div className="flex flex-1 items-center justify-between">
					{/* <StarImage /> */}
					<div className="max-w-[673px] gap-5 flex flex-col">
						<h1 className="font-semibold text-[40px] leading-[52px] bg-gradient-to-r from-[#3399FF] to-[#00E676] bg-clip-text text-transparent">
							Find Your Perfect Workout Buddy and Smart AI support
						</h1>
						<p className="font-normal">
							Tired of training alone or losing motivation? Aktiv helps you find workout buddies, accountability partners, coaches, and
							AI tools for motivation, diet, and progress tracking. Plus, access Aktiverse — a supportive fitness community.
						</p>
					</div>
					{/*  */}
					<div className="flex flex-col gap-3 max-w-[416px] w-full">
						<div className="gap-2.5 flex flex-col">
							<div className="flex">
								<h3 className=" px-4 py-1 border border-[#3399FFCC] rounded-xl font-semibold text-xl text-[#3399FF]">
									Launching Soon
								</h3>
							</div>
							<p className="font-medium text-2xl">Sign up now to get early access</p>
						</div>
						<div className="flex flex-col gap-3">
							<input type="text" className="h-14 border border-[#3399FF] bg-[#3F3F3F] rounded-xl px-4" placeholder="Enter Your Name" />
							<input
								type="text"
								className="h-14 border border-[#3399FF] bg-[#3F3F3F] rounded-xl px-4"
								placeholder="Enter Your Email address"
							/>
						</div>
						<div>
							<button className=" hover:opacity-90 h-[52px] rounded-xl flex justify-center items-center bg-gradient-to-r from-[#3399FF] to-[#00E676] w-full font-medium text-xl">
								Get early access
							</button>
						</div>
					</div>
				</div>
			</section>

			<section>
				<h2 className="font-medium text-[40px] mb-[60px] text-center">Why Aktiv?</h2>
				<div className="grid grid-cols-3 gap-5">
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
					<Card
						icon={<Image src={PuzzleIcon} alt="Puzzle Icon" width={48} height={48} />}
						title="AI-Powered Matching"
						desc="Aktiv’s smart AI helps you find the right people for gym sessions, sports, or any fitness activity based on your location, goals, fitness level, and vibe."
					/>
				</div>
			</section>

			<section className="mt-[140px] flex justify-between">
				<div className="max-w-[460px]">
					<h3 className="font-medium text-[40px] mb-4">FAQ</h3>
					<p className="font-medium text-xl">
						Got questions? Find answers to common queries here. If you need more info, don’t hesitate to reach out.
					</p>
				</div>
				<div className="max-w-[630px] w-full">
					<LandingPageAccordion />
				</div>
			</section>

			<section className=" mt-[120px] mb-[81px] rounded-3xl bg-gradient-to-r from-[#00E676] to-[#00E67600] p-px overflow-hidden">
				<div className="flex rounded-3xl justify-between p-11 bg-[#3E3E3E] ">
					<div>
						<div>
							<h2 className="font-medium text-[40px] leading-[56px]">Available Soon on App Store & Google Play</h2>
							<div className="mt-14"></div>
						</div>
						<div className="gap-14 flex">
							<AppStoreIcon />
							<PlayStoreIcon />
						</div>
					</div>
					<div className="max-w-[420px]">
						<h3 className="font-medium text-2xl">Get Notified When We Launch and Enjoy Exclusive Early Access.</h3>
						<div className="flex flex-col gap-3 mt-4">
							<div className="rounded-xl p-px bg-gradient-to-r from-[#3399FF] to-[#3399FF] h-14 flex">
								<input type="text" className="text-black rounded-xl flex-1 px-4" placeholder="Enter Your Name" />
							</div>
							<div className="rounded-xl text-black p-px bg-gradient-to-r from-[#3399FF] to-[#3399FF] h-14 flex">
								<input type="text" className="rounded-xl flex-1 px-4" placeholder="Enter Your Email address" />
							</div>
						</div>
						<button className="mt-5 h-[52px] rounded-xl bg-gradient-to-r to-[#00E676] px-6 font-medium text-xl from-[#3399FF]">
							Get early access
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
