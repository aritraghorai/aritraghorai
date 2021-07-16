source $HOME/.vim/vim-plug/plugins.vim

set nu
set noerrorbells
set mouse=a
" Enable clipboard if possible
if has('clipboard')
    if has('unnamedplus') " When possible use + register for copy-paste
        set clipboard=unnamed,unnamedplus
    else " On mac and Windows, use * register for copy-paste
        set clipboard=unnamed
    endif
endif

" Don't backup orignal files
set nobackup
set nowritebackup

" Ignore case when searching
set ignorecase

" When searching try to be smart about cases
set smartcase

" Highlight search results
set hlsearch

" Makes search act like search in modern browsers
set incsearch

"keymaps
inoremap jk <Esc>
map <C-A> ggvG
vnoremap jk <Esc>
"#noremap W viw 
"#noremap T vit 
