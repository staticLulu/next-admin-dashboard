'use client'

import { Button } from "@nextui-org/button";
import DynamicButton from "./DynamicButton";
import DynamicPopover from "./DynamicPopover";
import SectionProfile from "./SectionProfile";
import DynamicSelectButton from "./DynamicSelect";
import DynamicSelect from "./DynamicSelect";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DynamicModal from "./DynamicModal";
import { useDisclosure } from "@nextui-org/react";

const ClientProfile = ({users, animals}:{users: any; animals: any}) => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isOpenMe, setIsOpenMe] = useState<boolean>(false);
  const [isOpenHelloworld, setIsOpenHelloworld] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const {
    isOpen: isOpenModal2, 
    onOpen: openModal2, 
    onOpenChange: onOpenChangeModal2, 
    onClose: onCloseModal2
  } = useDisclosure();

  const handleRefresh = () => {
    setTimeout(() => {
      setIsRefreshing(false);
      router.refresh();
      router.push("/");
    }, 1000);
  };

  const handleAgreement = () => {
    setIsOpenHelloworld(false);
    setTimeout(() => {
      router.push("/");
    }, 3200);
  }

  const handleDisagreement = () => {
    setLoading(true);
    setTimeout(() => {
      setIsRefreshing(false);
      router.refresh();
      router.push("/helloworld");
    }, 2000);
  }

  const handleClickMe = () => {
    alert("hellodarkworldihitsm!!!");
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <SectionProfile title="Button">
        <DynamicButton label="hello world" variant="outline" onClick={() => router.push("/")} />
        <DynamicButton label="hello world" variant="primary" onClick={handleClickMe} />
        <DynamicButton
          label={isRefreshing ? "Refreshing..." : "hello world"}
          variant="secondary"
          disabled={isRefreshing}
          onClick={handleRefresh}
        />
      </SectionProfile>

      <SectionProfile title="Popover">
        <DynamicPopover
          isOpen={isOpenMe}
          onOpenChange={() => setIsOpenMe(true)}
          title="Are You Sure?"
          trigger={<Button size="sm">Open me</Button>}
          content={
            <div className="w-full">
              <p className="py-5 text-center text-base">You can not restore this user after deleted.</p>
              <div className="flex justify-between ">
                <Button 
                  size="sm" 
                  onClick={() => setIsOpenMe(false)}
                >
                  Cancel
                </Button>
                <Button 
                  color="danger" 
                  size="sm" 
                  onClick={() => setIsOpenMe(false)}
                >
                  Delete
                </Button>
              </div>
            </div>
          }
          placement="top"
          popoverClass="bg-white w-[360px] p-5"
        />
        <DynamicPopover
          isOpen={isOpenHelloworld}
          onOpenChange={() => setIsOpenHelloworld(true)}
          title="Hello"
          trigger={<Button size="sm" color="secondary">Hello world</Button>}
          content={
            <div className="w-full">
              <p className="py-5 text-center text-base">hello welcome somewhere you no plan hasha!!!</p>
              <div className="flex justify-between ">
                <DynamicButton 
                  onClick={handleDisagreement} 
                  variant="primary" 
                  label="Disagree" 
                  size="sm"
                />
                <DynamicButton 
                  onClick={handleAgreement} 
                  variant="primary" 
                  label="Agree" 
                  size="sm"
                />
              </div>
            </div>
          }
          placement="top"
          popoverClass="bg-white w-[360px] p-5"
        />
      </SectionProfile>

      <SectionProfile title="Select">
        <div 
          className="
            p-4 
            grid 
            grid-cols-2 
            gap-4 
            w-full 
            bg-primary/[.14] 
            rounded-lg 
            shadow-sm 
            items-start
          "
        >
          <DynamicSelectButton
            placeholder="your favorite animal"
            label="All animals"
            data={animals}
            renderItem={(item: any) => (
              <div className="flex items-center gap-2">
                <span className="text-base">💚 {item.label} 💚</span>
              </div>
            )}
          />
          <DynamicSelect placeholder="a user" data={users} />
          <DynamicSelect placeholder="your favorite animal" size="lg" data={animals}/> 
          <DynamicSelect placeholder="your favorite animal" size="sm" data={animals}/> 
        </div>
      </SectionProfile>
      <SectionProfile title="Modal">
        <DynamicButton label="Helloworld" onClick={onOpen} size="sm" />
        <DynamicModal 
          isOpen={isOpen} 
          bodyContent={"helloworld!!"} 
          title="Dynamic modal" 
          onOpenChange={onOpenChange} 
          footerButtons={
            <>
              <DynamicButton label="Cancel" onClick={onClose} size="sm" variant="secondary" />
              <DynamicButton label="OK" onClick={onClose} size="sm" />
            </>
          }
        />

        <DynamicButton label="Helloworld" onClick={openModal2} variant="outline" size="sm"  />
        <DynamicModal 
          isOpen={isOpenModal2} 
          size="2xl"
          bodyContent={"helloworld!!"} 
          title="Dynamic modal" 
          onOpenChange={onOpenChangeModal2} 
          footerButtons={
            <>
              <DynamicButton label="Cancel" onClick={onCloseModal2} size="sm" variant="primary" />
              <DynamicButton 
                label="OK" 
                onClick={() => {
                  onCloseModal2;
                  router.push('/users');
                }} 
                size="sm" 
                variant="outline" 
                className=" shadow-indigo-500/20" 
              />
            </>
          }
        />
      </SectionProfile>
    </div>
  )
}

export default ClientProfile;