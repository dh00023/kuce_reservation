class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
  # GET /reservations
  # GET /reservations.json
  def index
    if current_user.try(:admin?)
        @reservations = Reservation.all
    else
      @reservations = Reservation.where(user_id: current_user)
    end
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
  end

  # GET /reservations/new
  def new
    @reservation = current_user.reservations.build
  end

  # GET /reservations/1/edit
  def edit
  end

  # POST /reservations
  # POST /reservations.json
  def create
    @reservation = current_user.reservations.build(reservation_params)
    @reservations = Reservation.where(user_id: current_user)
    reservation_count=@reservations.count()

    
    if reservation_count <4
      if @reservation.choose.to_i==2
            if reservation_count <3
              Reservation.create!(user_id: @reservation.user_id, group_id: @reservation.group_id,
                                starttime: @reservation.starttime+1.hours, endtime: @reservation.endtime+1.hours,
                                choose: '1')
            else
              flash[:errors] = "일주일 예약가능 최대시간을 초과하였습니다."
              redirect_to root_path
            end
      end
      respond_to do |format|
        if @reservation.save
          format.html { redirect_to @reservation, notice: '예약이 완료되었습니다.' }
          format.json { render :show, status: :created, location: @reservation }
        else
          format.html { render :new ,notice: '예약시간을 초과하셨습니다.'}
          format.json { render json: @reservation.errors, status: :unprocessable_entity }
        end
      end
    else
      flash[:errors] = "일주일 예약가능 최대시간을 초과하였습니다."
      redirect_to root_path
    end
  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    respond_to do |format|
      if @reservation.update(reservation_params)  
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservation }
      else
        format.html { render :edit }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation.destroy
    respond_to do |format|
      format.html { redirect_to reservations_url, notice: 'Reservation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:starttime, :endtime, :choose,:group_id)
    end
end