import Link from "next/link";

export const Venue = () => {
  return (
    <div className="">
      <img
        src="/images/VKPalace.JPG"
        alt="Venue Image"
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4 space-y-2">
        <div className="text-lg font-semibold">V.K Palace</div>
        <div className="text-muted-foreground">
          <p>Thandalam, Periapalayam, Tiruvallur - 601102 </p>
        </div>
        <p className="text-sm text-muted-foreground">
          The venue is located directly opposite the Grey Suit Hotel.
        </p>
      </div>
      <div className="p-4">
        <Link
          href="https://www.google.com/maps/dir/12.9695744,80.2422784/vk+palace/@13.3104764,79.9950088,18z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a528340c50846e7:0x8db126915eee7d95!2m2!1d79.9957294!2d13.3105528?entry=ttu"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}
        >
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          View on Google Maps
        </Link>
      </div>
    </div>
  );
};
