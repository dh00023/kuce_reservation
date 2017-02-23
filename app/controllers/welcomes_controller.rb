class WelcomesController < ApplicationController
  before_action :set_welcome, only: [ :edit, :update]

  # GET /welcomes
  # GET /welcomes.json
  def index
    @welcomes = Welcome.all
  end

  # GET /welcomes/1/edit
  def edit
  end

  # PATCH/PUT /welcomes/1
  # PATCH/PUT /welcomes/1.json
  def update
    respond_to do |format|
      if @welcome.update(welcome_params)
        format.html { redirect_to root_path, notice: 'Welcome was successfully updated.' }
        format.json { render :show, status: :ok, location: @welcome }
      else
        format.html { render :edit }
        format.json { render json: @welcome.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_welcome
      @welcome = Welcome.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def welcome_params
      params.require(:welcome).permit(:description)
    end
end
