import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { IconApps, IconBrandAppleFilled, IconBrandDiscordFilled, IconBrandFacebookFilled, IconBrandGithubFilled, IconBrandHipchat, IconBrandLinkedinFilled, IconBrandPinterestFilled, IconBrandSnapchat, IconBrandSpotifyFilled, IconBrandTiktokFilled, IconBrandTwitterFilled, IconBrandWhatsappFilled } from "@tabler/icons-react";

export function AppsSwitch() {
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconApps className="text-white cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className='mt-2.5 w-80 bg-white rounded-lg drop-shadow-lg px-2 py-2'>
        <div className="grid grid-cols-3 items-center justify-around text-slate-800">
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandWhatsappFilled className="text-[#34d900]" />
            <label>What App</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandLinkedinFilled className="text-[#2d72f1]" />
            <label>Linked In</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandPinterestFilled className="text-[#d9001d]" />
            <label>Pinterest</label>
          </div>

          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandSnapchat className="text-[#333]" />
            <label>Snap chat</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandSpotifyFilled className="text-[#34e483]" />
            <label>Spotify</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandTwitterFilled className="text-[#0093ff]" />
            <label>X</label>
          </div>

          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandTiktokFilled className="text-[#000]" />
            <label>Tictok</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandGithubFilled className="text-[#000000]" />
            <label>Github</label>
          </div>
          <div className="flex flex-col gap-y-1 items-center justify-center text-xs rounded-md py-4 hover:bg-slate-100 cursor-pointer">
            <IconBrandHipchat className="text-[#1b4070]" />
            <label>Hip chat</label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
