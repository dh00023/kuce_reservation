class WelcomesController < ApplicationController
  before_action :set_welcome, only: [ :edit, :update]

  # GET /welcomes
  # GET /welcomes.json
  def index
    @welcomes = Welcome.all
  end

  def show
  end

  # GET /reservations/new
  def new
    @welcome = Welcome.new
  end

  # GET /welcomes/1/edit
  def edit
  end
  def create
    respond_to do |format|
      if @welcome.save
        format.html { redirect_to @reservation, notice: '예약이 완료되었습니다.' }
        format.json { render :show, status: :created, location: @reservation }
      else
        format.html { render :new ,notice: '예약시간을 초과하셨습니다.'}
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /welcomes/1
  # PATCH/PUT /welcomes/1.json
  def update
    respond_to do |format|
      if @welcome.update(welcome_params)
        format.html { redirect_to welcomes_path, notice: 'Welcome was successfully updated.' }
        format.json { render :show, status: :ok, location: @welcome }
      else
        format.html { render :edit }
        format.json { render json: @welcome.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @welcome.destroy
    respond_to do |format|
      format.html { redirect_to welcomes_url, notice: 'Reservation was successfully destroyed.' }
      format.json { head :no_content }
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
