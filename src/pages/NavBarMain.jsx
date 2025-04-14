
export default function NavBarMain(props) {
    return (
      <nav
        $name="navbar_main"
        class="flex justify-between items-center p-4 bg-neutral-700 shadow-[0_2px_4px_rgba(0,0,0,0.2)] max-sm:p-2"
      >
        <div
          $name="navbar_container"
          class="flex justify-between items-center w-full"
        >
          <div $name="logo_wrapper" class="flex items-center">
            <Image
              image="https://placehold.co/120x40/332f3d/e6e6e6?text=LOGO"
              altText="Company Logo"
              class="overflow-hidden relative h-10 w-[120px]"
              aspectRatio={1}
            />
          </div>
          <div $name="nav_links_desktop" class="flex gap-6 max-sm:hidden">
            <a
              class="builder-2550c2401c14445fa84850f20e815d0d font-medium no-underline text-neutral-200"
              href="#"
            >
              Product
            </a>
            <a
              class="builder-c7e6e63269c24a4ea4a0e1dff652ab38 font-medium no-underline text-neutral-200"
              href="#"
            >
              Pricing
            </a>
            <a
              class="builder-a65c8ade24704d6594c8ec3a4daa0186 font-medium no-underline text-neutral-200"
              href="#"
            >
              Contribute
            </a>
            <a
              class="builder-3d3bd7c697ed43978a9085057bbcd6ff font-medium no-underline text-neutral-200"
              href="#"
            >
              Contact
            </a>
          </div>
          <button
            $name="button_menu_mobile"
            class="hidden p-2 cursor-pointer border-[none] max-sm:block"
            onClick={(event) => state.toggleMenu()}
          >
            <div class="mx-0 my-1.5 w-6 h-0.5 bg-white transition-[0.3s]" />
            <div class="mx-0 my-1.5 w-6 h-0.5 bg-zinc-800 transition-[0.3s]" />
            <div class="mx-0 my-1.5 w-6 h-0.5 bg-zinc-800 transition-[0.3s]" />
          </button>
          <div
            $name="nav_menu_mobile"
            class="hidden fixed inset-x-0 p-4 bg-[white] shadow-[0_2px_4px_rgba(0,0,0,0.1)] top-[60px]"
            style={{
              "@media (max-width: 640px)": {
                display: state.isMenuOpen ? "block" : "none",
              },
            }}
          >
            <div class="flex flex-col gap-4">
              <a
                href="#"
                class="px-0 py-2 font-medium no-underline text-zinc-800"
              >
                Product
              </a>
              <a
                href="#"
                class="px-0 py-2 font-medium no-underline text-zinc-800"
              >
                Pricing
              </a>
              <a
                href="#"
                class="px-0 py-2 font-medium no-underline text-zinc-800"
              >
                Contribute
              </a>
              <a
                href="#"
                class="px-0 py-2 font-medium no-underline text-zinc-800"
              >
                Contact
              </a>
              <div class="flex gap-4 items-center">
                <button class="builder-c7cd360e0ea946adb4bcf6bce8f33bc3 px-6 py-2 font-medium rounded cursor-pointer bg-zinc-700 border-[none] text-[white]">
                  Login
                </button>
                <button class="builder-6ba92457a04045dfa8e1f71cd2ee1044 flex justify-center items-center w-10 h-10 rounded-full cursor-pointer bg-neutral-200 border-[none] duration-[0.3s] ease-[ease] transition-[background-color]">
                  <Image
                    image="https://placehold.co/32x32/666666/FFFFFF?text=P"
                    altText="Profile"
                    class="overflow-hidden relative w-8 h-8 rounded-full"
                    aspectRatio={1}
                  />
                </button>
              </div>
            </div>
          </div>
          <div $name="nav_buttons_wrapper" class="flex gap-4 items-center">
            <div class="flex gap-4 items-center max-sm:hidden">
              <button
                class="builder-62c042a8baac41fbb5ad3ebf4df2f5d9 px-6 py-2 font-medium text-white bg-orange-300 rounded border border-orange-400 border-solid cursor-pointer"
                $name="button_login_desktop"
              >
                Login
              </button>
              <button class="builder-bebc5ee3f5dc45cca068fe631aec0eb3 flex justify-center items-center w-10 h-10 rounded-full cursor-pointer bg-zinc-800 border-[none] duration-[0.3s] ease-[ease] transition-[background-color]">
                <Image
                  image="https://placehold.co/32x32/666666/FFFFFF?text=P"
                  altText="Profile"
                  class="overflow-hidden relative w-8 h-8 rounded-full"
                  aspectRatio={1}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  