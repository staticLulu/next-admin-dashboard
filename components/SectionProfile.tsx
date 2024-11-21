'use client'

const SectionProfile = ({title, children}:{title: string; children: any;}) => {
  return (
    <div className="border p-5">
      <p className="text-xl font-medium text-primary-500 my-4">** {title} **</p>
      <div className="flex gap-2.5">
        {children}
      </div>
    </div>
  )
}

export default SectionProfile;