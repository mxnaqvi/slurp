class Api::BusinessesController < ApplicationController

    def show
        @business = Business.find(params[:id])
        render :show
    end

    def index
        @businesses = Business.all
        render :index
    end
    
end
